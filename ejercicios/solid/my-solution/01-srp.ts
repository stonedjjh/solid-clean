(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductServices {
    getProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      console.log("Producto: ", { id, name: "OLED Tv" });
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      console.log("Guardando en base de datos", product);
    }
  }

  class Mailer {
    private fromEmail: string = "<noreply@example.com>";
    sendEmail(
      emailList: string[],
      subject: string,
      template: "to-clients" | "to-admins"
    ) {
      console.log("Enviando correo a los clientes", template);
    }
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    private productService: ProductServices;
    private mailer: Mailer;

    constructor(productService: ProductServices, mailer: Mailer) {
      this.productService = productService;
      this.mailer = mailer;
    }

    loadProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      this.productService.saveProduct(product);
    }

    notifyClients() {
      this.mailer.sendEmail(
        ["client1@example.com", "client2@example.com"],
        "Nuevo producto disponible",
        "to-clients"
      );
    }
  }

  class CartBloc {
    private itemsInCart: Object[] = [];
    onAddToCart(productId: number) {
      // Agregar al carrito de compras
      console.log("Agregando al carrito ", productId);
    }
  }

  const productService = new ProductServices();
  const mailer = new Mailer();
  const productBloc = new ProductBloc(productService, mailer);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  cartBloc.onAddToCart(10);
})();
