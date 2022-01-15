import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Trainer, Pokemon } from '../../types';
import { EmptyTrainer } from '../../constants/Data';

interface PokeData {
  trainer: Trainer;
  pokemons: Pokemon[];
}

interface ContextType extends PokeData {
  onUpdateData: (data: PokeData) => void;
}

const StorageKey = 'PokeroleData';

const initialValue: PokeData = {
  trainer: EmptyTrainer,
  pokemons: [],
};

const DataContext = createContext<ContextType>({
  ...initialValue,
  onUpdateData: () => {},
});

export const DataProvider: React.FC<PropsWithChildren<{}>> = (props) => {
  const { children } = props;
  const [data, setData] = useState<PokeData>(initialValue);

  useEffect(() => {
    (async () => {
      const dataJSON = await AsyncStorage.getItem(StorageKey);

      if (dataJSON) {
        const dataObj = JSON.parse(dataJSON);

        setData({
          ...dataObj,
          trainer: {
            ...EmptyTrainer,
            ...dataObj.trainer,
          },
        });
      }
    })();
  }, []);

  const onUpdateData = async (newData: PokeData) => {
    setData(newData);

    await AsyncStorage.setItem(StorageKey, JSON.stringify(newData));
  };

  return (
    <DataContext.Provider value={{ ...data, onUpdateData }}>
      {children}
    </DataContext.Provider>
  );
};

export default function useData() {
  const dataContext = useContext(DataContext);

  return dataContext;
}
