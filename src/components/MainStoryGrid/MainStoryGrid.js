import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { COLORS, QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media(${QUERIES.tabletAndUp}) {
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories'
    ;
    gap: 48px 0;
  }
  @media(${QUERIES.laptopAndUp}) {
    grid-template-columns: 45% 30% 25%;
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement'
    ;
    gap: 16px 0;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media(${QUERIES.tabletAndUp}) {
    padding-right: 16px;
    margin-right: 16px;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  @media(${QUERIES.tabletAndUp}) {
    /* padding: 0 16px; */
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: var(--color-gray-300);

`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  @media(${QUERIES.tabletAndUp}) {
    padding-left:16px;
  }
`;

const OpinionStoryList = styled(StoryList)`
  @media(${QUERIES.tabletAndUp}) {
    flex-direction: row;
    background: transparent;
    gap: 32px;
  }
  @media(${QUERIES.laptopAndUp}) {
    flex-direction: column;
  }

  @media(${QUERIES.laptopAndUp}) {
    display: grid;
    gap: 1px;
    background: var(--color-gray-300);
  }
`

const AdvertisementSection = styled.section`
  grid-area: advertisement;


  @media(${QUERIES.laptopAndUp}) {
    padding: 16px;
    padding-right: 0;
  }
`;

export default MainStoryGrid;
