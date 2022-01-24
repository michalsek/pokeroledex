import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
  useEffect,
  useMemo,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Trainer, Pokemon } from '../../types';
import { EmptyTrainer } from '../../constants/Data';
import { isEmpty } from 'lodash';

interface PokeData {
  trainers: {
    [uui: string]: Trainer;
  };
}

interface ContextType {
  trainer: Trainer;
  onUpdateData: (data: PokeData) => void;
  setSelectedTrainer: (uuid: string) => void;
}

const StorageKey = 'PokeroleData';

const initialValue: PokeData = {
  trainers: {},
};

const DataContext = createContext<ContextType>({
  trainer: EmptyTrainer,
  onUpdateData: () => {},
  setSelectedTrainer: () => {},
});

export const DataProvider: React.FC<PropsWithChildren<{}>> = (props) => {
  const { children } = props;
  const [data, setData] = useState<PokeData>(initialValue);
  const [selectedTrainer, setSelectedTrainer] = useState<string>();

  useEffect(() => {
    (async () => {
      const dataJSON = await AsyncStorage.getItem(StorageKey);

      if (!dataJSON || isEmpty(dataJSON)) {
        return;
      }

      setData(JSON.parse(dataJSON));
    })();
  }, []);

  const onUpdateData = async (newData: PokeData) => {
    setData(newData);

    await AsyncStorage.setItem(StorageKey, JSON.stringify(newData));
  };

  const trainer = useMemo(() => {
    if (!selectedTrainer) {
      return EmptyTrainer;
    }

    return data.trainers[selectedTrainer];
  }, [data, selectedTrainer]);

  return (
    <DataContext.Provider value={{ trainer, onUpdateData, setSelectedTrainer }}>
      {children}
    </DataContext.Provider>
  );
};

export default function useData() {
  const dataContext = useContext(DataContext);

  return dataContext;
}
