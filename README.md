#사전 랜더링 방식

1. SSR(Server-Side Rendering)
   - 실시간 데이터가 필요한 경우나 복잡한 로직을 처리해야 할 때 유리
2. SSG(Static Site Generation)
   - 정적 콘텐츠가 많은 경우나 빠른 로딩 속도가 필요한 경우에 적합
3. ISR
   - SSR 방식과 SSG 방식이 혼합되어 서로의 단점을 보완해 줄 수 있는 강력한 사전 랜더링 방식
   - 웬만하면 ISR 방식으로 사전 랜더링 할 것을 추천
   - 그러나 즉각적인 데이터가 반영되어야 하는 경우에는 유연하게 대처할 수 없다는 문제점. 따라서 SSR 방식과 적절히 섞어 사용해야함
