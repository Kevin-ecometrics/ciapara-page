export default function About() {
    return (
        
        <div className="flex flex-row items-center justify-between gap-20 py-20 mx-10">
            <div className="max-w-3xl">
                <h1 className="text-lg font-semibold uppercase text-primary">About Enrique Ciapara</h1>
                <div className="flex flex-row items-start gap-3 text-6xl font-bold mb-6">
                    <span></span>
                    <h1 className=" text-gray-900">
                        lorem ipsum
                    </h1>
                    <h2 className=" text-primary">
                        dolor sit amet
                    </h2>
                    </div>
                    <p className="text-lg max-w-4xl leading-relaxed">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod unde aspernatur ratione, hic ea doloribus odio facere dignissimos, voluptatum dolorum nam dolore inventore maiores soluta quibusdam perspiciatis architecto repellat dolor nobis, enim temporibus. Quae in excepturi aliquam suscipit saepe quos hic deserunt, perferendis tempore adipisci tenetur repellendus minima facilis quam?
                    </p>
                </div>
            <div>
                <figure>
                    <img src="https://placehold.co/600x550" alt="About image" className="rounded-lg object-cover" />
                </figure>
            </div>
        </div>
    )
}