
import { useState } from "react";
import NoProjectSelected from "./Components/NoProjectSelected";
import Sidebar from "./Components/Sidebar";
import NewProject from "./Components/NewProject";
import SelectedProject from "./Components/SelectedProjects";


export default function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks:[]
  });

const selectProject=projectsState.projects.find(project => project.id===projectsState.selectedProjectId)
  let content=<SelectedProject project={selectProject} onDelete={HandleDelete} onAddTask={HandleAddTask} onDeleteTask={HandleDeleteTask} tasks={projectsState.tasks}/>;



  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={AddProject} Oncancel={Handlecancel} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }


  function HandleAddTask(text){
    setProjectsState(prevstate => {
      const taskId=Math.random();
      const newTask = {
        text:text,
        projectId:prevstate.selectedProjectId,
        id:taskId,
 
      };
      return {
        ...prevstate,
        tasks : [newTask, ...prevstate.tasks],
      };
    })
  }

  function HandleDeleteTask(id){
    setProjectsState((prevstate) => {
      return {
        ...prevstate,
       tasks:prevstate.tasks.filter((task)=>task.id!== id),
      };
    });
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
    <main className="h-screen  flex gap-8 bg-stone-200">
      <Sidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects}
      onSelectProject={HandleSelectProject} selectedProjectId={projectsState.selectedProjectId} />
      {content}
    </main>
  );
}