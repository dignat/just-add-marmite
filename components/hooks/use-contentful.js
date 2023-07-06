import { useState, useEffect } from "react";

function useContentful(query, isPreview, userId) {
    const [data, setData] = useState(null);
    const [errors, setError] = useState(null)
    
   // https://graphql.contentful.com/content/v1/spaces/{SPACE}/environments/{ENVIRONMENT}
    useEffect(() => {
        window.fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CONENTFUL_ENVIRONMENT_ID}`,
         {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${isPreview ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_KEY : process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY}`
            },
            body: JSON.stringify({query, variables: {isPreview, userId}})
        })
        .then((response) => response.json())
        .then(({data, errors}) => {

            if (errors) setError(errors);
            if (data) setData(data);

        }).catch(error => setError([error]));
console.log(data, 'data')
    }, [query, isPreview]);

    return {data, errors};
}

export default useContentful;