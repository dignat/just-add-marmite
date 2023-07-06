import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {BLOCKS, INLINES} from '@contentful/rich-text-types'
import Skeleton from "../../components/Skeleton";
import ImageGallery from "../../components/ImageGallery";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  environment: process.env.NEXT_PUBLIC_CONENTFUL_ENVIRONMENT_ID
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'recipe'
  });


const paths = res.items.map(item => {
  return {
    params: {
      slug: item.fields.slug
    }
  }
})
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({params}) {
  const { items } = await client.getEntries({
    content_type: 'recipe',
    'fields.slug': params.slug
  });
  // conditional redirect
  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  return {
    props: {recipe: items[0]},
    revalidate: 1 // incremental static regenration
  }
}
const RICHTEXT_OPTIONS = {
  renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p style={{color: 'red'}}>{children}</p>
    },
    [INLINES.HYPERLINK]: (node, children) => {
      return <a>{ children}</a>
    }
  }
  
}
export default function RecipeDetails({recipe}) {
  if (!recipe) return <Skeleton/>

  const featuredImage = recipe.fields?.featuredImage;
  const gallery = recipe.fields?.gallery?.map((image) => image.fields.image);

  const { title, cookingTime, ingredients, method} = recipe.fields
  return (
    <div>
      <div className="banner">
        <p>I am in {process.env.NEXT_PUBLIC_ENVIRONMENT_ID}</p>
        { gallery ? (<ImageGallery gallery={gallery}
        />) : (
          <Image src={`https:${featuredImage.fields.file.url}`}
        width={featuredImage.fields.file.details.image.width}
        height={featuredImage.fields.file.details.image.height}/>
        )}
        
        <h2>{title}</h2>
      </div>
      <div className="info">
        <p>Take about {cookingTime} mins to cook</p>
        <h3>Ingredients:</h3>
        {ingredients.map(ing => (
          <span key={ing}>{ing}</span>
        ))}
      </div>
      <div className="method">
        <h3>Method:</h3>
        <div>{documentToReactComponents(method, RICHTEXT_OPTIONS)}</div>
      </div>
      <style jsx>{`
        h2,h3 {
          text-transform: uppercase;
        }
        .info p {
          margin: 0;
        }
        .info span::after {
          content: ", ";
        }
        .info span:last-child::after {
          content: ".";
        }
      `}</style>
    </div>
  )
}