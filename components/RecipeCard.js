import Link from 'next/link';
import Image from 'next/image';
export default function RecipeCard({recipe}) {
    const {title, slug, cookingTime, thumbnail} = recipe.fields
    return (
        <div className="card">
            <div className="featured">
                <Image src={`https:${thumbnail.fields.file.url}`} 
                width={thumbnail.fields.file.details.image.width}
                height={thumbnail.fields.file.details.image.height}></Image>
            </div>
            <div className="content">
                <div className="info">
                    <h4>{title}</h4>
                    <p>Take approx: {cookingTime}</p>
                </div>
                <div className="actions">
                    <Link href={`/recipes/${slug}`}>Cook this</Link>
                </div>
            </div>
            <style jsx>{`
                .card {
                    transform: rotateZ(-1deg);
                }
                .content {
                    background: #fff;
                    box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
                    margin: 0;
                    position: relative;
                    top: -40px;
                    left: -10px;
                }
                .info {
                    padding: 15px;
                }
                .actions {
                    margin-top: 20px;
                    display: flex;
                    hustify-content:  flex-end;
                }
                .actions a {
                    color: #fff;
                    background: #f01b29;
                    padding: 16px 24px;
                    text-decoration: none;
                }
            `}</style>
        </div>
    )
}