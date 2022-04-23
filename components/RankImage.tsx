import React, { memo, useMemo } from 'react';
import { Image, ImageProps } from 'react-native';

import StarterImage from 'assets/images/ranks/starter.png';
import BegginerImage from 'assets/images/ranks/begginer.png';
import AmateurImage from 'assets/images/ranks/amateur.png';
import AceImage from 'assets/images/ranks/ace.png';
import ProImage from 'assets/images/ranks/pro.png';
import MasterImage from 'assets/images/ranks/master.png';
import ChampionImage from 'assets/images/ranks/champion.png';
import { Rank } from '../types';

type RankImageProps = Omit<ImageProps, 'source'> & {
  rank: Rank;
};

function rankToImage(rank: Rank) {
  return {
    [Rank.Starter]: StarterImage,
    [Rank.Begginer]: BegginerImage,
    [Rank.Amateur]: AmateurImage,
    [Rank.Ace]: AceImage,
    [Rank.Pro]: ProImage,
    [Rank.Master]: MasterImage,
    [Rank.Champion]: ChampionImage,
  }[rank];
}

const RankImage: React.FC<RankImageProps> = ({ rank, ...imageProps }) => {
  const imageSource = useMemo(() => rankToImage(rank), [rank]);

  return <Image {...imageProps} source={imageSource} />;
};

export default memo(RankImage);
