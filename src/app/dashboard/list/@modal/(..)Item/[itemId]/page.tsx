
import Modal from './modal';
import Photo from './frame';
import photos from './photos';
export default function PageModal({ params }: { params: { itemId: string } }) {
    console.log('server?' + params.itemId);
    return (
        <Modal>
            <div>replaced {params.itemId}</div>
            <Photo photo={photos[0]} />
        </Modal>
    );
}