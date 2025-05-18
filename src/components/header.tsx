
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import { Cookies } from "@/constants/cookies";
import { authClient } from "@/lib/auth-client";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Folder, UserIcon } from "lucide-react";
import { APIRoutes } from "@/constants/api_routes";
import { apiRequest } from "@/api";
import { HttpMethods } from "@/constants/api_methods";
import useClientStore from "@/stores/clientStore";
import useProjectStore from "@/stores/projectStore";

export function Header() {
    const [userName, setUserName] = useState("")
    const {data, error, isPending} = authClient.useListOrganizations()
    const [clients, setClients] = useState([])
    const [projects, setProjects] = useState([])

    const currentSelectedClient = useClientStore((state) => state.currentSelectedClient);
    const selectCurrentClient = useClientStore((state) => state.selectCurrentClient);
    const currentSelectedProject = useProjectStore((state) => state.currentSelectedProject);
    const selectCurrentProject = useProjectStore((state) => state.selectCurrentProject);

    // const currentClient = useClientStore((state) => state.getCurrentClient);
    // const currentProject = useProjectStore((state) => state.getCurrentProject);
    
    useEffect(() => {
      if(hasCookie(Cookies.NAME)) {
        const cookieValue =  getCookie(Cookies.NAME)
        if(cookieValue){
          setUserName(`${cookieValue}`)
        }
      };

      if(hasCookie(Cookies.ORGANIZATION_ID)){
        getOrganizationClients();
      }
  
    }, [])

    const getOrganizationClients = async() => {
      const id = `${getCookie(Cookies.ORGANIZATION_ID)}`
      const url = `${APIRoutes.ORGANIZATIONS.GET_ORGANIZATION}/${id}/clients`;
      apiRequest(HttpMethods.GET, url, {})
      .then(data => {
        setClients(data.data)
      })
      .catch(err => {
        console.log(`Error getting clients`);
        console.log(err);
      })
    } 

    const getClientProjects = async (clientID: string) => {
      if(clientID == ""){
        console.log("clientID is empty")
        return
      }
      const currentClient: {id: string, clientName: string} = clients.filter((client: {id: string, clientName: string}) => client.id == clientID)[0];
      if(currentClient){
        console.log(`printing current client: ${currentClient.clientName}`)
        selectCurrentClient({id: currentClient.id, name: currentClient.clientName})
        selectCurrentProject({id: "", name: ""})
      }
      const url =  `${APIRoutes.ORGANIZATIONS.PROJECT}/${clientID}/projects`;
      apiRequest(HttpMethods.GET, url, {})
      .then(data => {
        console.log(`Projects, `, data.data);
        setProjects(data.data);
      })
      .catch(err => {
        console.log(`Error getting projects`);
        console.log(err);
      })
    }

    const onProjectSelect = (id: string) => {
      console.log(`selected project id: ${id}`);
      if(id == ""){
        console.log(`projectID is empty!`);
        return;
      }
      const currentProject: {id: string, name: string} = projects.filter((project: {id: string, name: string}) => project.id == id)[0];
      if(currentProject){
        selectCurrentProject({id: currentProject.id, name: currentProject.name})
      }
    }

    if(!isPending) {
      if(!error && data){
        if(data[0] != null) {
          console.log("organzation info, ", data[0])
          const organizationId: string|null = data[0].id;
          const organizationName: string|null = data[0].name;
          if(organizationId != null && organizationName != null) {
          setCookie(Cookies.ORGANIZATION_ID, organizationId);
          setCookie(Cookies.ORGANIZATION_NAME, organizationName);
          }
        }
      }
    }

    const canSelectAProject = (): boolean => {
      if(currentSelectedClient.id == ""  || currentSelectedClient.name == ""){
        return false;
      }
      return true;
    }

    return <header className="sticky top-0 z-10 flex h-16 w-full items-center justify-end border-b bg-background px-6 shadow-sm">
      <nav className="flex items-center gap-6">
      <Select onValueChange={(value) => getClientProjects(value)}>
        <SelectTrigger className="w-[180px]">
          <UserIcon />
          <SelectValue placeholder="Select Client" />
        </SelectTrigger>
        <SelectContent>
          {clients.length && clients.map((client: {id: string, clientName: string}) => (
            <SelectItem key={client.id} value={client.id}>{client.clientName}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select disabled={canSelectAProject() == false} onValueChange={(value) => onProjectSelect(value)}>
        <SelectTrigger className="w-[180px]">
          <Folder />
          <SelectValue placeholder="Select Project" />
        </SelectTrigger>
        <SelectContent>
          {projects.map((project: {id: string, name: string}) => (
          <SelectItem key={project.id} value={project.id}>{project.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="User" />
          <AvatarFallback>{userName.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
      </nav>
    </header>
  }
