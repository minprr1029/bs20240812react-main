const Hello =  () => {
    return(<>
      <h1>Hello World</h1>
    </>)
  }
  
  const App = () => {
    return(<>
      <h3>Welcome to my homepage</h3>
      <Hello />
    </>);
  };
  

  //컴포넌트를 모듈에 등록
  // -> 프로젝트의 모든 컴포넌트 파일에서 import 가능
  export default App;