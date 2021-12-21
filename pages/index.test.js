jest.mock('~/utils', () => ({
  // mock faz um clone da funções e deixa vc substituir elas por o que vc quiser
  scrollToElement: jest.fn(),
  getRandomNumber: jest.fn(),
  playAudio: jest.fn(),
  sendNotification: jest.fn()
}));

// fornece funções de montar elementos, components, etc...
import { mount } from '@vue/test-utils';
import VueMeta from 'vue-meta';

import { setupLocalVueStore } from '~/store/helper';

// toda essa importação é trocada pelo mock
import {
  scrollToElement,
  getRandomNumber,
  playAudio,
  sendNotification,
} from '~/utils'

import Countdown from '~/components/molecules/Countdown.vue';
import index from './index.vue';

describe('Pages:index', () => {
  const { localVue, configureStore } = setupLocalVueStore();
  localVue.use(VueMeta, { keyName: 'head' });
  let mountConfig;

  beforeEach(() => {
    scrollToElement.mockClear();
    getRandomNumber.mockClear();
    playAudio.mockClear();
    sendNotification.mockClear();
    global.Notification = {
      requestPermission: jest.fn(),
      permission: 'default',
    };

    mountConfig = {
      localVue,
      stubs: {
        Profile: true,
        CompletedChallenges: true,
        Countdown: true,
        Card: true,
      }
    }
  })
  describe('Snapshots', () => {
    it('should render all child components and start a cycle button', () => {
      expect();
    });

    it('should render all child components and abandon cycle button', () => {
      expect();
    });

    it('should render all child components and cycle completed button', () => {
      expect();
    })
  });

  describe('Meta info', () => {
    it('should have a meta title', () => {
      expect();
    });
  });

  describe('Mounted', () => {
    it('should request Notification permissions when mounted', () => {
      expect();
    });
  });
});