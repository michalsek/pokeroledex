import { startCase } from 'lodash';
import React, { useMemo } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageStyle,
  TouchableOpacity,
  ViewProps,
} from 'react-native';

import { Moves } from 'constants/Data';
import RankImage from 'components/RankImage';
import { getColorForPokemonType } from '../utils/getPokemonBackground';
import { PossibleMove, RollPath } from '../types';
import Icon from 'components/Icon';
import translate from '../utils/translate';

interface MoveListItemProps {
  move: PossibleMove;
  onPress?: () => void;
  isHighlighted?: boolean;
  margin?: 'right' | 'left';
}

function formatAccuracy(roll: RollPath[]) {
  const [roll1, roll2, roll3] = roll;
  const roll1T =
    translate(['attributes', roll1 as string]) ??
    translate(['socialAttributes', roll1 as string]);
  const roll2T =
    translate(['attributes', roll2 as string]) ??
    translate(['socialAttributes', roll2 as string]);

  const attribute = typeof roll2 === 'string' ? `${roll1T}/${roll2T}` : roll1T;

  const skill = translate([
    'skills',
    ...(roll2 instanceof Array ? roll2 : roll3),
  ]);

  return `${attribute} + ${skill}`;
}

const Container: React.FC<ViewProps & { onPress?: () => void }> = (props) => {
  if (props.onPress) {
    return <TouchableOpacity onPress={props.onPress} {...props} />;
  }

  return <View {...props} />;
};

const MoveListItem: React.FC<MoveListItemProps> = ({
  move,
  margin,
  onPress,
  isHighlighted,
}) => {
  const moveData = useMemo(() => Moves[move.move], [move.move]);

  const color = useMemo(
    () => getColorForPokemonType(moveData?.type),
    [moveData],
  );

  if (!moveData) {
    return (
      <Container
        style={[styles.container, margin && styles[margin]]}
        onPress={onPress}
      >
        <View style={styles.header}>
          <Text style={[styles.moveName, { color: '#000' }]}>
            {startCase(move.move)}
          </Text>
          {isHighlighted && (
            <View style={styles.highlightIcon}>
              <Icon
                name="check-circle"
                size={24}
                style={styles.highlightIconInner}
              />
            </View>
          )}
        </View>
      </Container>
    );
  }

  return (
    <Container
      style={[
        styles.container,
        margin && styles[margin],
        { borderColor: color },
      ]}
      onPress={onPress}
    >
      <View style={[styles.header, { backgroundColor: color }]}>
        <Text style={styles.moveName}>{moveData.name}</Text>
        <RankImage rank={move.rank} style={styles.rankIcon as ImageStyle} />
        {isHighlighted && (
          <View style={styles.highlightIcon}>
            <Icon
              name="check-circle"
              size={24}
              style={styles.highlightIconInner}
            />
          </View>
        )}
      </View>
      {!!moveData.accuracyRoll && (
        <View style={styles.content}>
          <View style={styles.row}>
            <View>
              <Text style={styles.label}>Accuracy:</Text>
            </View>
            <Text style={styles.label}>
              {formatAccuracy(moveData.accuracyRoll)}
            </Text>
          </View>
        </View>
      )}
    </Container>
  );
};

export default MoveListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 10,
  },
  header: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomEndRadius: 4,
    borderBottomStartRadius: 4,
  },
  moveName: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  rankIcon: {
    width: 20,
    height: 20,
  },
  right: {
    marginRight: 5,
  },
  left: {
    marginLeft: 5,
  },
  highlightIcon: {
    position: 'absolute',
    top: -8,
    right: -4,
  },
  highlightIconInner: {
    color: '#bcdefa',
  },

  content: {
    paddingHorizontal: 8,
    paddingTop: 4,
    paddingBottom: 8,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 14,
  },
});
