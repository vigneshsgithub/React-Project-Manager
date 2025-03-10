
import { useState } from "react";
import NoProjectSelected from "./Components/NoProjectSelected";
import Sidebar from "./Components/Sidebar";
import NewProject from "./Components/NewProject";
import SelectedProject from "./Components/SelectedProjects";


export default function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

const selectProject=projectsState.projects.find(project => project.id===projectsState.selectedProjectId)
  let content=<SelectedProject project={selectProject} onDelete={HandleDelete}/>;



  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={AddProject} Oncancel={Handlecancel} />
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

  function AddProject(projectData) {
    setProjectsState(prevstate => {

      const newProject = {
        ...projectData,
        id: Math.floor(Math.random() * 20)
        // title:"",
        // description:"",
        // due_date:"",
      }
      return {
        ...prevstate,
        projects: [...prevstate.projects, newProject],
        selectedProjectId: undefined
      }
    })
  }

  function Handlecancel() {
    setProjectsState(prevstate => {
      return {
        ...prevstate,
        selectedProjectId: undefined
      };
    });
  }

  function HandleSelectProject(id){
    setProjectsState(prevstate => {
      return {
        ...prevstate,
        selectedProjectId:id
      };
    });
  }



  function HandleDelete(){
    setProjectsState((prevstate) => {
      return {
        ...prevstate,
        selectedProjectId: undefined,
        projects:prevstate.projects.filter((project)=>{
          project.id!== prevstate.selectedProjectId
        })
      };
    });
  }




  return (
    <main className="h-screen my-8 flex gap-8 bg-stone-200">
      <Sidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects}
      onSelectProject={HandleSelectProject} />
      {content}
    </main>
  );
}