import { ReactComponent as VirtueReality} from './assets/Virtue_Reality.svg';
import { ReactComponent as ComingSoon} from './assets/coming_soon.svg';
import { ReactComponent as BringingVirtue} from './assets/bringing_virtue.svg';
import { ReactComponent as VrLogo} from './assets/vr_logo.svg';
import { ReactComponent as VrCopyright} from './assets/vr_copyright.svg';
import Line1 from './static/Line1.png'
import Line2 from './assets/Line2.png'
import Line3 from './assets/Line3.png'
import './App.css';

function App() {
  return (
    <main className={"App"}>
      <img className={"line1"} alt= '' src={Line1} />
      <span className={"coming_soon"} >
        <ComingSoon />
      </span>
      <span className={"company"} >
        <VirtueReality />
      </span>
      <span className={"bringing_virtue"} >
        <BringingVirtue />
      </span>
      <img className={"line2"} alt= '' src={Line2} />
      <img className={"line3"} alt= '' src={Line3} />
    <footer className={"footer"} >
    <VrLogo className={"logo"} />
    <VrCopyright className={"copyright"} />
    </footer>
    </main>
  );
}

export default App;
