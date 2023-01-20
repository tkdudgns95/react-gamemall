import React from 'react'
import "./UserCardBlock.css"
function UserCardBlock(props) {

    const renderCartImage = (images) => {
        if (images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }




    const renderItems = () => (
        props.products && props.products.map((product, index) => (
            <tr key={index}>
                <td>
                    <img style={{ width: '70px' }} alt="product"
                        src={renderCartImage(product.images)} />
                </td>
                <td>
                    {product.quantity} EA
                </td>
                <td>
                    $ {product.price}
                </td>
                <td>
                    <button onClick={() => props.removeItem(product._id)}>
                        목록에서 제거 
                    </button>
                </td>
            </tr>
        ))
    )


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>상품 이미지</th>
                        <th>상품 수량</th>
                        <th>상품 가격</th>
                        <th>장바구니에서 제거</th>
                    </tr>
                </thead>

                <tbody>
                    {renderItems()}
                </tbody>
            </table>
        </div>
    )
}

export default UserCardBlock
