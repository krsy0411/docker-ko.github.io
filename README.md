# Docker 한국어 번역 프로젝트

> [도커 공식 문서](https://docs.docker.com/)를 참고해주세요.

이 프로젝트는 Docker 공식 문서의 한국어 번역을 목표로 합니다. 개발자와 DevOps 엔지니어를 비롯한 많은 사람들이 Docker를 더 쉽게 배우고 활용할 수 있도록 돕기 위해 시작되었습니다. 오픈소스 프로젝트로 진행되며 누구나 기여할 수 있습니다.

## 목차

- [Docker 한국어 번역 프로젝트](#docker-한국어-번역-프로젝트)
  - [목차](#목차)
  - [프로젝트 목표](#프로젝트-목표)
  - [번역 범위](#번역-범위)
  - [참여 방법](#참여-방법)
  - [스타일 가이드](#스타일-가이드)
  - [배포](#배포)
  - [기여자들](#기여자들)
  - [라이선스](#라이선스)
  - [문의](#문의)

## 프로젝트 목표

- Docker 공식 문서의 주요 섹션을 한국어로 번역
- 번역의 품질과 일관성 유지
- 한국어 사용자 커뮤니티의 성장

## 번역 범위

다음과 같은 주요 섹션을 우선적으로 번역합니다:

1. Get Started
2. Installation Guides
3. Docker CLI 사용법
4. Compose 및 Swarm
5. Advanced Topics

전체 번역 범위는 [도커 공식 문서](https://docs.docker.com/)를 통해 확인하실 수 있습니다.

## 참여 방법

1. 이 저장소를 포크(Fork)합니다.
2. 포크한 저장소를 클론(Clone)합니다.
   ```bash
   git clone https://github.com/[YOUR_USERNAME]/docker-ko.github.io
   ```
3. 새로운 브랜치를 생성합니다.
   ```bash
   git checkout -b [USERNAME]-[translate | ui]
   ```
4. 문서를 번역한 뒤 커밋하고 푸시합니다.
   ```bash
   git add .
   # 선택1) 번역
   git commit -m "translate : Get Started"
   # 선택2) UI
   git commit -m "ui : What is an image"
   git push origin [USERNAME]/[translate | ui]
   ```
5. 원본 저장소로 Pull Request를 생성합니다.
   - `origin/master` <- `[USERNAME]/[translate | ui]`

## 스타일 가이드

번역의 일관성을 유지하기 위해 아래의 가이드를 참고하세요:

- **어조**: 경어체를 사용하며, 기술적 문맥에서는 간결한 표현을 지향합니다.
- **형식**: Markdown 문법을 따르며, 코드 블록은 번역하지 않습니다.

자세한 사항은 [스타일 가이드](./SYTLE_GUIDE.md)를 참고하세요.

## 배포

이 프로젝트는 GitHub Pages를 통해 번역된 결과물을 제공합니다. 배포된 페이지는 [여기](https://docker-ko.github.io/)에서 확인할 수 있습니다.

## 기여자들

이 프로젝트는 커뮤니티의 기여로 이루어집니다. 기여해주신 모든 분들께 감사드립니다!

## 라이선스

이 프로젝트는 [MIT 라이선스](./LICENSE)를 따릅니다. 기여하기 전에 반드시 라이선스를 읽어주시기 바랍니다.

## 문의

프로젝트에 대한 문의 사항이나 제안 사항이 있다면 [이슈](https://github.com/docker-ko/docker-ko.github.io/issues)를 통해 연락주세요.
