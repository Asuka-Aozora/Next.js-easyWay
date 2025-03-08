type Params = {
  params: {
    projectId: string
  }
}


const page = ({ params }: Params) => {
  return <div className="text-2xl font-bold">Project Id: {params.projectId}</div>
}

export default page
