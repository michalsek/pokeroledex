import React, { useCallback, useState } from 'react';
import {
  Text,
  View,
  Modal,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import Colors from 'constants/Colors';
import Layout from './Layout';

interface PokemonDialogProps {
  visible: boolean;
  onCancel: () => void;
  onSubmit: (pokeNum: number) => void;
}

const PokemonDialog: React.FC<PokemonDialogProps> = ({
  visible,
  onCancel,
  onSubmit,
}) => {
  const [pokeNum, setPokeNum] = useState<string>('');

  const blockPress = useCallback(() => {}, []);

  const onSubmitPress = useCallback(() => {
    onSubmit(parseInt(pokeNum, 10));
    setPokeNum('');
  }, [pokeNum, setPokeNum]);

  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableWithoutFeedback onPress={onCancel}>
        <View style={styles.backdrop}>
          <View style={styles.content}>
            <TouchableWithoutFeedback onPress={blockPress}>
              <View style={styles.container}>
                <Text style={styles.title}>Pokemon Number:</Text>
                <Layout.Stack size="medium" />
                <TextInput
                  autoFocus
                  value={pokeNum}
                  style={styles.input}
                  onChangeText={setPokeNum}
                  keyboardType="number-pad"
                />
                <Layout.Stack size="medium" />
                <View style={styles.buttons}>
                  <TouchableOpacity onPress={onCancel}>
                    <View style={styles.button}>
                      <Text style={styles.buttonText}>Cancel</Text>
                    </View>
                  </TouchableOpacity>
                  <Layout.Queue size="medium" />
                  <TouchableOpacity onPress={onSubmitPress}>
                    <View style={styles.button}>
                      <Text style={styles.buttonText}>Ok</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default PokemonDialog;

const styles = StyleSheet.create({
  container: { flex: 1 },
  backdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  content: {
    backgroundColor: Colors.backgroundAlt,
    padding: 15,
    borderRadius: 15,
    width: '75%',
    minHeight: 135,
  },
  title: {
    fontSize: 24,
    color: '#fff',
  },
  input: {
    backgroundColor: '#fff',
    fontSize: 24,
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 15,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: '#414042',
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 15,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
