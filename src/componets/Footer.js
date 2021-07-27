const Footer = () => {
  return (
    <div className='container-fluid bg-dark'>
      <div className='row'>
        <div className='col text-light text-center mt-2 mb-3'>
          <p>¡Siguenos en nuestras redes sociales!</p>
          <a href='https://m.facebook.com/TacoJuve/' className='btn-light'
          style={{
            textDecoration: 'none',
            padding: '5px 7.5px',
            borderRadius: '5px',
          }} 
          >
            <i className="bi bi-facebook me-2"></i>
            Tacos Don Juve
          </a>
        </div>
      </div>
      <div className='row mt-3 pb-3'>
        <div className='col-6 text-center' style={{borderRight:'2px solid white'}} >
          <p className='text-white mb-2'>
            ¿Pedido a domicilio?
          </p>
          <a href='https://m.facebook.com/TacoJuve/' className='link-light me-3'>Uber</a>
          <a href='https://m.facebook.com/TacoJuve/' className='link-light'>Didi</a>
        </div>
        <div className='col-6 text-center'>
          <p className='text-white mb-2'>
            Contactanos:
          </p>
          <a href='https://m.facebook.com/TacoJuve/' className='link-light'>
            <i className="bi bi-whatsapp me-2"></i>
            33 3333 3333
            </a>
        </div>
      </div>
    </div>
  )
}
export default Footer;