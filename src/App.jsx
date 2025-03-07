
import NoProjectSelected from "./Components/NoProjectSelected";
import Sidebar from "./Components/Sidebar";


export default function App() {
  return (
    <main className="h-screen my-8 flex gap-8 bg-stone-200">
      <Sidebar/>
     <NoProjectSelected/>
    </main>
  );
}