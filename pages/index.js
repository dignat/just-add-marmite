import {createClient} from 'contentful';
import DataGraph from '../components/DataGraph';
import RecipeCard from '../components/RecipeCard';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
    environment: process.env.NEXT_PUBLIC_CONENTFUL_ENVIRONMENT_ID
  });
  const res = await  client.getEntries({ content_type: 'recipe'});

  return {
    props: {
      recipes: res.items
    },
    revalidate: 1
  }
}
export default function Recipes({recipes}) {
  return (
    <>
    <DataGraph isPreview="true" entryId="M5NrkbdqkbA1k4TJN1ciY"/>
    <div className="recipe-list">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.sys.id} recipe={recipe}/>
      ))}
      <style jsx>{`
        .recipe-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px 60px;
        }
      `}</style>
    </div>
    
    </>
    
  )
}