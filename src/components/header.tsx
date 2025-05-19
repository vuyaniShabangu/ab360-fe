"use client"

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


interface project {
  id: string,
  name: string
}
interface client {
  id: string,
  clientName: string,
  organisationId: string,
  projects: project[]
}

export function Header() {
    const [userName, setUserName] = useState("")
    const [clients, setClients] = useState<client[]>([])
    const [projects, setProjects] = useState<project[]>([])

    const selectCurrentClient = useClientStore((state) => state.selectCurrentClient);
    const selectCurrentProject = useProjectStore((state) => state.selectCurrentProject);

    const currentClient = useClientStore((state) => state.getCurrentClient);


    // const getOrganizationCookies = () => {
    //   if(isPending){
    //     console.log(`getting organization is still pending!`)
    //   }else{
    //     console.log(`done getting user organization details: ${data}`)
    //     if(data?.length){
    //       setCookie(Cookies.ORGANIZATION_ID, data[0].id);
    //       setCookie(Cookies.ORGANIZATION_NAME, data[0].name)
    //       return; 
    //     }
    //   }
    // }
    // getOrganizationCookies();
    
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
        // console.log(`all organization clients: `, data.data);
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
      const currentClient: client = clients.filter((client: {id: string}) => client.id == clientID)[0];
      if(currentClient == null){  
        console.log("Selected client is null!");
        return;
      }  
      selectCurrentClient({id: currentClient.id, name: currentClient.clientName})
      selectCurrentProject({id: "", name: ""})

      if(currentClient.projects){
        setProjects(currentClient.projects)
      }
    }

    const onProjectSelect = (id: string) => {
      if(id == ""){
        console.log(`projectID is empty!`);
        return;
      }
      const project: project = projects.filter((project: {id: string, name: string}) => project.id == id)[0];
      if(project == null){
        console.log("selected project is null!")
        return;
      }
      selectCurrentProject({id: project.id, name: project.name})
    }

    const canSelectAProject = (): boolean => {
      if(currentClient().id == "" || currentClient().name == ""){
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

      <Select disabled={!canSelectAProject()} onValueChange={(value) => onProjectSelect(value)}>
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
