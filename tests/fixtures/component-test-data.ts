/**
 * 웹 컴포넌트 테스트용 픽스처 데이터
 * 테스트 데이터와 로직을 분리하여 재사용성과 유지보수성 향상
 */

export interface CardComponentTestCase {
  title: string;
  description: string;
  imgsrc: string;
  href: string;
}

export interface ButtonComponentTestCase {
  title: string;
  href: string;
}

export interface HomeLinkCardComponentTestCase {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export const CARD_COMPONENT_TEST_CASES: readonly CardComponentTestCase[] = [
  {
    title: 'Docker 개요',
    description: 'Docker의 기본 개념',
    imgsrc: '/imgs/docker.svg',
    href: '/overview',
  },
  {
    title: 'Kubernetes',
    description: '컨테이너 오케스트레이션',
    imgsrc: '/imgs/k8s.svg',
    href: '/k8s',
  },
] as const;

export const BUTTON_COMPONENT_TEST_CASES: readonly ButtonComponentTestCase[] = [
  { title: '시작하기', href: '/get-started' },
  { title: '문서 보기', href: '/docs' },
  { title: '튜토리얼', href: '/tutorial' },
] as const;

export const HOME_LINK_CARD_COMPONENT_TEST_CASES: readonly HomeLinkCardComponentTestCase[] =
  [
    {
      title: '문서 시작하기',
      description: 'Docker 기본 사항을 배워보세요',
      icon: 'book',
      href: '#/get-started',
    },
    {
      title: 'GitHub 저장소',
      description: '소스 코드 보기 및 기여하기',
      icon: 'github',
      href: 'https://github.com/docker-ko/docker-ko.github.io',
    },
  ] as const;
