import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
  useEffect,
  useMemo,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Trainer } from '../../types';
import { EmptyTrainer } from '../../constants/Data';
import { isEmpty, uniqueId } from 'lodash';

interface PokeData {
  trainers: {
    [uuid: string]: Trainer;
  };
}

interface ContextType extends PokeData {
  trainer: Trainer;
  isLoading: boolean;
  onClear: () => Promise<void>;
  onAddTrainer: () => Promise<void>;
  setSelectedTrainer: (uuid: string) => void;
  onUpdateTrainer: (newTrainer: Trainer) => Promise<void>;
}

const StorageKey = 'PokeroleData';

const initialValue: PokeData = {
  trainers: {},
};

const DataContext = createContext<ContextType>({
  trainers: {},
  isLoading: true,
  trainer: EmptyTrainer,
  onAddTrainer: async () => {},
  onUpdateTrainer: async () => {},
  onClear: async () => {},
  setSelectedTrainer: () => {},
});

export const DataProvider: React.FC<PropsWithChildren<{}>> = (props) => {
  const { children } = props;
  const [data, setData] = useState<PokeData>(initialValue);
  const [isLoading, setLoading] = useState(true);
  const [selectedTrainer, setSelectedTrainer] = useState<string>();

  useEffect(() => {
    (async () => {
      const dataJSON = await AsyncStorage.getItem(StorageKey);

      if (!dataJSON || isEmpty(dataJSON)) {
        setLoading(false);
        return;
      }

      const loadedData = JSON.parse(dataJSON);

      if (!isEmpty(loadedData.trainers)) {
        setSelectedTrainer(Object.keys(loadedData.trainers)[0]);
      }

      setData(loadedData);
      setLoading(false);
    })();
  }, []);

  const onUpdateData = async (newData: PokeData) => {
    setData(newData);

    await AsyncStorage.setItem(StorageKey, JSON.stringify(newData));
  };

  const onAddTrainer = async () => {
    const trainerId = uniqueId(`t-${Date.now()}-`);

    await onUpdateData({
      trainers: {
        ...data.trainers,
        [trainerId]: EmptyTrainer,
      },
    });

    setSelectedTrainer(trainerId);
  };

  const onUpdateTrainer = async (updatedTrainer: Trainer) => {
    const newData = {
      trainers: {
        ...data.trainers,
        [selectedTrainer!]: updatedTrainer,
      },
    };

    await onUpdateData(newData);
  };

  const onClear = async () => {
    await onUpdateData({ trainers: {} });
  };

  const trainer = useMemo(() => {
    if (!selectedTrainer) {
      return EmptyTrainer;
    }

    return data.trainers[selectedTrainer];
  }, [data, selectedTrainer]);

  return (
    <DataContext.Provider
      value={{
        // Data
        trainer,
        isLoading,
        trainers: data.trainers,

        // Methods
        onClear,
        onAddTrainer,
        onUpdateTrainer,
        setSelectedTrainer,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default function useData() {
  const dataContext = useContext(DataContext);

  return dataContext;
}
