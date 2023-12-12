import { useParams } from "react-router-dom";
import '../styles/readbook.css';
import { useEffect, useState } from "react";
import axios from "axios";
const Readbooks = () => {
    let params = useParams();
    let [book, setBook] = useState({});

    useEffect(() => {
        let fetchData = async () => {
            await axios.get(`http://localhost:7000/getbooks/${params.id}`)
                .then((data) => setBook(data.data))
                .catch(() => console.log("fetching error"))
        }
        fetchData();
    }, []);

    return (
        <div className="readbook" style={{display:"flex",justifyContent:"center",marginTop:"50px"}}>
            <div className="main addmain">
                <div className="section">
                    <div className="bookcard">
                        <div className="bookimage">
                            <img src={book.thumbnailUrl} title={book.title} alt={book.title} />
                        </div>
                        <div className="bookcardinfo rightCards">
                            <div className="bookscardinfo-no-btns readbookinfo">
                                <div className="booktitle">
                                    <h2 title={book.title}><strong>{book.title}</strong></h2>
                                </div>
                                <div>
                                    <p><span>Authors : </span> {book.authors}</p>
                                </div>
                                <div>
                                    <p className="categories"><span>Categories :</span> {book.categories}</p>
                                </div>
                                <div>
                                    <p><span>ShortDescription : </span>{book.shortDescription}</p>
                                </div>
                                <div>
                                    <p><span>Page Count : </span>{book.pageCount}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Readbooks;