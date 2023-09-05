import logo from "./logo.svg"
import "./App.css"
import HelloWorld from "./Components/ClassComp"
import Props from "./Components/Props/Props"
import Props2 from "./Components/Props/Props2"
import StatesDemo from "./Components/States/StatesDemo"
import SetStateDemo from "./Components/States/SetStateDemo"
import PrevStateDemo from "./Components/States/PrevStateDemo"
import AutoTimer from "./Components/States/AutoTimer"
import DestrutClassComp from "./Components/Destructuring/DestrutClassComp"
import DesctrutFunctionalComp from "./Components/Destructuring/DesctrutFunctionalComp"
import EventHandlingClassComp from "./Components/EventHandling/EventHandlingClassCompDemo1"
import TypesOfEventBindingInClassComp from "./Components/EventHandling/TypesOfEventBindingInClassComp"
import PassingMethodAsProps from "./Components/Props/PassingMethodAsProps"
import ParentComp from "./Components/Props/ParentComp"
import Parent from "./Components/ConditionalRendering/Parent"
import ParentListRendering from "./Components/ListRendering/ParentListRendering"
import ExternalCss from "./Components/StylingOfComponents/ExternalCss"
import InlineCss from "./Components/StylingOfComponents/InlineCss"
import ModuleCss from "./Components/StylingOfComponents/ModuleCss"
import FormHandle from "./Components/BasicsOfFormHandling/FormHandle"
import MountingLifeCycle from "./Components/ComponentLifeCycle/MountingLifeCycle"
import UpdatingLifeCycle from "./Components/ComponentLifeCycle/UpdatingLifeCycle"
import Fragments from "./Components/Fragments/Fragments"
import PureComp from "./Components/PureComponent/PureComp"
import RegVsPure from "./Components/PureComponent/RegVsPure"
import RegVsMemo from "./Components/Memo/RegVsMemo"
import Refs from "./Components/RefsInReact/Refs"
import CallBackRefs from "./Components/RefsInReact/CallBackRefs"
import ParentRef from "./Components/RefsInReact/PassingRefToClassComp/ParentRef"
import FwdRefSender from "./Components/ForwardingRefs/FwdRefSender"
import Hero from "./Components/ErrorBoundary/Hero"
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary"
import PortalDemo from "./Components/Portals/PortalDemo"
import ClickCounter from "./Components/HigherOrderComponents/ClickCounter"
import HoverCounter from "./Components/HigherOrderComponents/HoverCounter"
import LogicOfCounter from "./Components/RenderProps/LogicOfCounter"
import MouseClick from "./Components/RenderProps/MouseClick"
import ComponentC from "./Components/Context/ComponentC"
import DisplayPosts from "./Components/Axios/DisplayPosts"
// import PostRequest from "./Components/Axios/PostRequest"
import MovieTitles from "./Components/Dummy/MovieTitles"
import Portal from "./PraticeComponent/Portals/Portal"
import ListRendering from "./PraticeComponent/Portals/ListRendering"
import Logic from "./PraticeComponent/RenderProps/Logic"
import HoverClick from "./PraticeComponent/RenderProps/HoverClick"
import { userContext } from "./Components/Context/userContext"
import {
  ProviderContext,
  CompanyContext,
} from "./PraticeComponent/Context/companyContext"
import Chakra from "./PraticeComponent/Context/Chakra"
import GetPosts from "./PraticeComponent/Axios/GetPosts"
import PostRequest from "./PraticeComponent/Axios/PostRequest"
import PrevStateWithCounter from "./Hooks in React/useState/PrevStateWithCounter"
import UseStateWithObject from "./Hooks in React/useState/UseStateWithObject"
import UseStateWithArray from "./Hooks in React/useState/UseStateWithArray"
function App() {
  return (
    <div className="App">
      <UseStateWithArray />
      {/* <UseStateWithObject /> */}
      {/* <PrevStateWithCounter /> */}
      {/* <Counter /> */}
      {/* <PostRequest /> */}
      {/* <GetPosts /> */}
      {/* <PostRequest /> */}
      {/* <ProviderContext value="Ammoru" />
      <Chakra />
      <ProviderContext /> */}
      {/* <userContext.Provider value="Ramesh">
        <ComponentC />
      </userContext.Provider> */}
      {/* <Logic
        render={(counter, incFun) => {
          return <HoverClick counter={counter} incFun={incFun} />
        }}
      /> */}

      {/* <ListRendering /> */}
      {/* <Portal /> */}
      {/* <PostRequest /> */}
      {/* <MovieTitles /> */}
      {/* <PostRequest /> */}
      {/* <DisplayPosts /> */}
      {/* <userContext.Provider value="Ramesh">
        <ComponentC />
      </userContext.Provider>
      <myContext.Provider value="Pooja">
        <ComponentC />
      </myContext.Provider> */}
      {/* <LogicOfCounter
        render={(count, incCount) => {
          return <MouseClick count={count} incCount={incCount} />
        }}
      />
      <LogicOfCounter
        render={function (count, incCrement) {
          return <HoverCounter count={count} incCrement={incCrement} />
        }}
      /> */}
      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* <HoverCounter /> */}
      {/* <PortalDemo /> */}
      {/* <ErrorBoundary>
        <Hero name="Suresh" />
        <Hero name="Ramesh" />
      </ErrorBoundary> */}
      {/* <FwdRefSender /> */}
      {/* <ParentRef /> */}
      {/* <CallBackRefs /> */}
      {/* <Refs /> */}
      {/* <RegVsMemo /> */}
      {/* <RegVsPure /> */}
      {/* <Fragments /> */}
      {/* <UpdatingLifeCycle /> */}
      {/* <MountingLifeCycle /> */}
      {/* <FormHandle /> */}
      {/* <ModuleCss /> */}
      {/* <InlineCss /> */}
      {/* <ExternalCss /> */}
      {/* <ParentListRendering /> */}
      {/* <Parent /> */}
      {/* <ParentComp /> */}
      {/* <TypesOfEventBindingInClassComp /> */}
      {/* <EventHandlingClassComp /> */}
      {/* <DesctrutFunctionalComp name="Markram" /> */}
      {/* <DestrutClassComp name="Markram" /> */}
      {/* <AutoTimer /> */}
      {/* <PrevStateDemo /> */}
      {/* <SetStateDemo /> */}
      {/* <StatesDemo /> */}
      {/* <Props2 name="Markram" country="South Africa" /> */}
      {/* <Props name="Pooran" country="West Indies" /> */}
      {/* <HelloWorld /> */}
    </div>
  )
}

export default App
