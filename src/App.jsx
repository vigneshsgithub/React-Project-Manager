
import { useState } from "react";
import NoProjectSelected from "./Components/NoProjectSelected";
import Sidebar from "./Components/Sidebar";
import NewProject from "./Components/NewProject";


export default function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });


  let content;



  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={AddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  function handleStartAddProject() {
    setProjectsState(prevstate => {
      return {
        ...prevstate,
        selectedProjectId: null
      };
    });
  }


  function AddProject(projectData){
    setProjectsState(prevstate =>{

      const newProject={
        ...projectData,
        id:Math.floor(Math.random()*20)
        // title:"",
        // description:"",
        // due_date:"",
      }
      return{
        ...prevstate,
        projects:[...prevstate.projects,newProject],
        selectedProjectId:undefined
      }
    })
  }






  return (
    <main className="h-screen my-8 flex gap-8 bg-stone-200">
      <Sidebar onStartAddProject={handleStartAddProject}  projects={projectsState.projects}/>
      {content}
    </main>
  );
}