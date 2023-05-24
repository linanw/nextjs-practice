import Photo from './frame';
import photos from './photos';
export default function Page({ params }: { params: { itemId: string } }) {
    return (
        <><div>real {params.itemId}</div>;
            <Photo photo={photos[0]} />
        </>);

}