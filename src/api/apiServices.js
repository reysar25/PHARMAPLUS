// Mock data
const mockProducts = [
    {
      id: 1,
      name: "Paracetamol",
      description: "Pain reliever and fever reducer",
      price: 5.99,
      image: "https://via.placeholder.com/150",
      category: "Pain Relief",
      stock: 50
    },
    {
      id: 2,
      name: "Amoxicillin",
      description: "Antibiotic medication",
      price: 12.99,
      image: "https://via.placeholder.com/150",
      category: "Antibiotics",
      stock: 30
    },
    {
      id: 3,
      name: "Ibuprofen",
      description: "Anti-inflammatory drug for pain relief",
      price: 7.49,
      image: "https://via.placeholder.com/150",
      category: "Pain Relief",
      stock: 45
    },
    {
      id: 4,
      name: "Cetirizine",
      description: "Antihistamine for allergy relief",
      price: 8.99,
      image: "https://via.placeholder.com/150",
      category: "Allergy",
      stock: 20
    },
    {
      id: 5,
      name: "Vitamin D3",
      description: "Vitamin supplement for bone health",
      price: 14.99,
      image: "https://via.placeholder.com/150",
      category: "Vitamins",
      stock: 60
    },
    {
      id: 6,
      name: "Omeprazole",
      description: "Treats heartburn and acid reflux",
      price: 10.49,
      image: "https://via.placeholder.com/150",
      category: "Digestive Health",
      stock: 25
    }
  ];
  
  const mockOrders = [
    {
      id: "ORD12345",
      userId: "user123",
      date: "2025-04-15T14:30:00",
      status: "delivered",
      total: 26.47,
      items: [
        { id: 1, name: "Paracetamol", quantity: 2, price: 5.99 },
        { id: 3, name: "Ibuprofen", quantity: 1, price: 7.49 },
        { id: 4, name: "Cetirizine", quantity: 1, price: 8.99 }
      ],
      deliveryAddress: "123 Main St, Cityville, State, 12345",
      trackingInfo: {
        carrier: "ExpressDelivery",
        trackingNumber: "ED98765432",
        estimatedDelivery: "2025-04-15T18:00:00",
        currentStatus: "Delivered",
        stages: [
          { name: "Order Placed", completed: true, time: "2025-04-14T10:15:00" },
          { name: "Processing", completed: true, time: "2025-04-14T11:20:00" },
          { name: "Shipping", completed: true, time: "2025-04-14T14:45:00" },
          { name: "Out for Delivery", completed: true, time: "2025-04-15T09:30:00" },
          { name: "Delivered", completed: true, time: "2025-04-15T14:30:00" }
        ]
      }
    },
    {
      id: "ORD12346",
      userId: "user123",
      date: "2025-04-28T09:45:00",
      status: "processing",
      total: 33.48,
      items: [
        { id: 2, name: "Amoxicillin", quantity: 1, price: 12.99 },
        { id: 5, name: "Vitamin D3", quantity: 1, price: 14.99 },
        { id: 1, name: "Paracetamol", quantity: 1, price: 5.99 }
      ],
      deliveryAddress: "123 Main St, Cityville, State, 12345",
      trackingInfo: {
        carrier: "ExpressDelivery",
        trackingNumber: "ED98765433",
        estimatedDelivery: "2025-04-30T18:00:00",
        currentStatus: "Processing",
        stages: [
          { name: "Order Placed", completed: true, time: "2025-04-28T09:45:00" },
          { name: "Processing", completed: true, time: "2025-04-28T10:30:00" },
          { name: "Shipping", completed: false, time: null },
          { name: "Out for Delivery", completed: false, time: null },
          { name: "Delivered", completed: false, time: null }
        ]
      }
    }
  ];
  
  // Helper function to simulate API delay
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  
  // Products API
  export const fetchProducts = async () => {
    try {
      // Simulate API call delay
      await delay(500);
      return { success: true, data: mockProducts };
    } catch (error) {
      console.error("Error fetching products:", error);
      return { success: false, error: "Failed to fetch products" };
    }
  };
  
  export const fetchProductById = async (productId) => {
    try {
      // Simulate API call delay
      await delay(300);
      const product = mockProducts.find(p => p.id === parseInt(productId));
      
      if (!product) {
        return { success: false, error: "Product not found" };
      }
      
      return { success: true, data: product };
    } catch (error) {
      console.error("Error fetching product:", error);
      return { success: false, error: "Failed to fetch product" };
    }
  };
  
  // Orders API
  export const getUserOrders = async (userId) => {
    try {
      // Simulate API call delay
      await delay(700);
      const userOrders = mockOrders.filter(order => order.userId === userId);
      return { success: true, data: userOrders };
    } catch (error) {
      console.error("Error fetching orders:", error);
      return { success: false, error: "Failed to fetch orders" };
    }
  };
  
  export const getOrderById = async (orderId) => {
    try {
      // Simulate API call delay
      await delay(400);
      const order = mockOrders.find(o => o.id === orderId);
      
      if (!order) {
        return { success: false, error: "Order not found" };
      }
      
      return { success: true, data: order };
    } catch (error) {
      console.error("Error fetching order:", error);
      return { success: false, error: "Failed to fetch order" };
    }
  };
  
  // User authentication
  export const loginUser = async (email, password) => {
    try {
      // Simulate API call delay
      await delay(800);
      
      // Mock authentication - in a real app this would validate against a backend
      if (email === "user@example.com" && password === "password123") {
        const userData = {
          id: "user123",
          name: "John Doe",
          email: "user@example.com",
          address: "123 Main St, Cityville, State, 12345",
          phone: "555-123-4567"
        };
        
        return { success: true, data: userData };
      } else {
        return { success: false, error: "Invalid email or password" };
      }
    } catch (error) {
      console.error("Error logging in:", error);
      return { success: false, error: "Login failed" };
    }
  };
  
  // Checkout function
  export const processCheckout = async (orderData) => {
    try {
      // Simulate API call delay
      await delay(1000);
      
      // Mock successful checkout
      const newOrder = {
        id: `ORD${Math.floor(10000 + Math.random() * 90000)}`, // Generate random order number
        userId: orderData.userId,
        date: new Date().toISOString(),
        status: "processing",
        total: orderData.total,
        items: orderData.items,
        deliveryAddress: orderData.deliveryAddress,
        trackingInfo: {
          carrier: "ExpressDelivery",
          trackingNumber: `ED${Math.floor(10000000 + Math.random() * 90000000)}`,
          estimatedDelivery: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days from now
          currentStatus: "Order Placed",
          stages: [
            { name: "Order Placed", completed: true, time: new Date().toISOString() },
            { name: "Processing", completed: false, time: null },
            { name: "Shipping", completed: false, time: null },
            { name: "Out for Delivery", completed: false, time: null },
            { name: "Delivered", completed: false, time: null }
          ]
        }
      };
      
      return { success: true, data: newOrder };
    } catch (error) {
      console.error("Error processing checkout:", error);
      return { success: false, error: "Checkout failed" };
    }
  };