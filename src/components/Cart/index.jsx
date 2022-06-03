import React, { useState, useEffect } from 'react';
import { useCartContext } from '../../context/CartContext';
import CartItem from '../CartItem';
import '../Cart/styles.css'
import {Link} from 'react-router-dom';
import { Button, Modal, Form } from 'react-bootstrap';


function Cart () {

    const { cartList,cartTotal,clear,totalCartItems, purchaseConfirm, purchaseId,clearPurchaseId } = useCartContext();
    const user={name:'', phone:'', email:''}

    const [show, setShow] = useState(false);
    const [userName, setName] = useState('');
    const [userPhone, setPhone] = useState('');
    const [userEmail, setEmail] = useState('');
    const [userEmailValidate, setEmailValidate] = useState('');
    const [disabled, setDisabled] = useState(false);

  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        user.name=userName
        user.phone=userPhone
        user.email=userEmail
        setDisabled(true)
    }, [userName,userPhone,userEmail,userEmailValidate]);

   function validateFields() {
        if (userEmail===userEmailValidate && userEmail!=='' && userEmailValidate!=='' && userName!=='' && userPhone!=='' ){
            purchaseConfirm(user)
            handleClose()
        }else{
            setDisabled(true)
        }
    };

    function closePopUp(){
        clearPurchaseId()
    }

    return ( 
        <div className='cart-container'>
            <div className='cartItem-div'> 
                {cartList.map(item=><CartItem item={item} key={item.id}/>)}
            </div>
            {cartList.length!==0?
            <div className='bottom-cart'>
                <div className='totalizadores-container'>
                    <p>Total items: {totalCartItems()}</p>
                    <p>Total: ${cartTotal()}</p>
                </div>
                <div>
                    <button className='cart-btns' onClick={()=>clear()}>Limpiar carrito</button>
                    <button className='cart-btns' onClick={handleShow}>Finalizar compra</button>
                    <>
                        <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                        >
                        <Modal.Header closeButton>
                            <Modal.Title>Finalizar Compra</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Nombre y Apellido</Form.Label>
                                <Form.Control onChange={event=>setName(event.target.value)} type="text" placeholder="Ingrese su nombre completo" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control onChange={event=>setPhone(event.target.value)} type="number" placeholder="Ingrese su teléfono" min={0} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control onChange={event=>setEmail(event.target.value)} type="email" placeholder="Ingrese su mail" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmailValidate">
                                <Form.Label>Validación Email</Form.Label>
                                <Form.Control onChange={event=>setEmailValidate(event.target.value)} type="email" placeholder="Ingrese su mail nuevamente" />
                            </Form.Group>
                        </Form>
                        {disabled?
                        <Form.Text className="text-muted">
                            Verifique que los campos estén completos y los emails coincidan
                        </Form.Text>:
                        <></>
                        }
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" className='cart-btn-cancel' onClick={handleClose}>
                            Cancelar 
                            </Button>
                            <Button variant="primary" className='cart-btns' onClick={()=>validateFields()}>Confirmar</Button>
                        </Modal.Footer>
                        </Modal>
                    </>
                    {purchaseId!==''?
                    <Modal.Dialog>
                    <Modal.Header closeButton>
                      <Modal.Title>Gracias por su compra!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>El código de su orden es {purchaseId}</p>
                    </Modal.Body>
                  
                    <Modal.Footer>
                    <Link to='/'><Button variant="primary" className='cart-btns' onClick={()=>{clear();closePopUp()}}>Cerrar</Button></Link>
                    </Modal.Footer>
                  </Modal.Dialog>
                    :
                    <></>
                    }
                </div>
            </div>
            :
            <div className='noItems-container'>   
                <h2>No hay items en el carrito</h2>
                <Link to={'/'}><button className='cart-btns'>Volver el catálogo</button></Link>
            </div>
            }
        </div>
     );
}

export default Cart ;