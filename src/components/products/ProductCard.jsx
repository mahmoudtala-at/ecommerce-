/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import Swal from "sweetalert2"
import "animate.css"
import { ThemeContext } from '../../context/ThemeContext';
import { useTranslation } from "react-i18next"

// eslint-disable-next-line react/prop-types
export default function ProductCard({ product, setProducts }) {
    const { i18n } = useTranslation()
    let { t } = useTranslation()
    const theme = useContext(ThemeContext)
    let handleDelete = () => {
        Swal.fire({
            title: t("delete_message"),
            text: product.title,
            showCancelButton: true,
            confirmButtonText: "Save",
            showClass: {
                popup: `
animate__animated
animate__fadeInUp
animate__faster
`,
            },
            hideClass: {
                popup: `
animate__animated
animate__fadeOutDown
animate__faster
`,
            },
        })
            .then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    deleteProduct(product.id)
                    Swal.fire(t("successfully_deleted"))
                }
            })
            .then(() => getProducts(setProducts))
    }

    let getProducts = (setProducts) => {
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error(error));
    }
    let getProductsAr = (setProducts) => {
        fetch('http://localhost:3000/productsAr')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        console.log(i18n)
        // if (i18n.language === "en") {
        //     getProducts();
        // }
        // else {
        //     getProductsAr()
        // }
    }, [i18n.language])

    let deleteProduct = (id) => {
        fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE'
        }).then(() => console.log("OK"))
    }


    return (

        <div className={theme.theme === "light" ? "bg-coloring row justify-content-between align-items-center " : "row justify-content-between align-items-center dark-con dark-border"}>
            <div className="col-3 ">
                <img src={product.image} alt="" width={"100vw"} />
            </div>
            <div className="col-9 textLeft" >
                <h3>{product.title}</h3>
                <h5>${product.price} USD</h5>
                <div className="mt-2 mb-2">
                    <span className="text-muted">{product.rating.rate} rating , </span>
                    <span className="text-muted">{product.rating.count} orders</span>
                </div>
                <p>{product.description}</p>
                <Link to={`/products/${product.id}`} className='link-primary text-decoration-none'>{t("view_details")}</Link>
            </div>
        </div>

    )
}
