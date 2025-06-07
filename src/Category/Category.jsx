import Card from "./Card"

const Category = () => {
    return (
        <div>
            <section className="py-12 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">Top Albums</h2>
                    <Card />
                </div>
            </section >
        </div >
    )
}

export default Category