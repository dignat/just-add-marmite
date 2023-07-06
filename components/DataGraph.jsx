import useContentful from "./hooks/use-contentful.js";
import Image from 'next/image'
function DataGraph({isPreview, entryId}) {
    const query = `
    query($userId: String!, $isPreview: Boolean) {
      person(id: $userId, preview: $isPreview) {
        name
        shortBio
        facebook
        twitter
        github
        image {
          title
          url
        }
      }
    }
    `

    const {data, errors} = useContentful(query, isPreview, entryId);
console.log(entryId)
    if (errors) return <span>{errors.map(error => error.message).join(',')}</span>
    return ( 
      <>
      { data ? (<>
        <div>{data.person.name} {process.env.NEXT_PUBLIC_ENVIRONMENT_ID}</div>
            <Image src={data.person.image.url} width="50" height="50"/>
      </>): ("")}
      </>
     );
}

export default DataGraph;