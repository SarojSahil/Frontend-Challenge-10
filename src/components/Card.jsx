import image from "../assets/image.png"
import user from "../assets/user.png"

const Card = () => {
  return (
    <article className="mx-auto max-w-xs bg-white rounded-xl overflow-clip shadow-[0px_0px_14px_var(--color-shadow)] font-sora">
      <img src={image} alt="Laptop, Notebook, Mobile Card Image" />
      <div className="p-6">
        <div className="bg-orange inline-block py-0.5 px-3 rounded-full text-white font-extralight text-sm mb-2">TECHNOLOGY</div>
        <h1 className="text-lg font-semibold mb-2">How I Build Web Development Challenges Website</h1>
        <h2 className="mb-6 text-neutral-800">If you're looking for inspiration to build your own side project...</h2>
        <div className="flex gap-2 items-center">
          <img 
          src={user} 
          alt="User Profile Icon"
          className="grow-0 w-10 h-10 rounded-full" />
          <div className="grow">
            <p className="font-medium">Sahil Saroj</p>
            <p className="text-sm text-neutral-500">4 h ago</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Card;