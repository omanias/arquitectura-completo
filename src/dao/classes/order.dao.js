import ordersModel from "../models/order.model.js";

export default class Order {

    getOrders = async () => {
        try {
            let result = await ordersModel.find()
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

    getOrderById = async (id) => {
        try {
            let result = await ordersModel.findOne({ _id: id })
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

    createOrder = async (order) => {
        try {
            let result = await ordersModel.create(order)
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

    resolveOrder = async (id, order) => {
        try {
            let result = await ordersModel.updateOne({ _id: id }, { $set: order })
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

} 