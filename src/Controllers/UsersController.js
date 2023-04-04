import { getConnection } from "../Database/database";




const index = async(req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("select * from cliente");
        res.json(result);
        //        console.log(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
const store = async(req, res) => {
    try {
        const { nombre, edad } = req.body;
        if (nombre === undefined || edad === undefined) {
            res.status(400).json({ message: "Ingrese bien los campos" });
        }
        const cliente = { nombre, edad };
        const connection = await getConnection();
        const result = await connection.query("insert into cliente set ?", cliente);
        res.json({ message: "cliente añadido" });
    } catch (error) {
        res.status(500);
        res.send(error.message);

    }
}
const update = async(req, res) => {
    try {
        const { id } = req.params;
        const { nombre, edad } = req.body;

        if (id === undefined || nombre === undefined || edad === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const cliente = { nombre, edad };
        const connection = await getConnection();
        const result = await connection.query("update cliente set ? where id = ?", [cliente, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const destroy = async(req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("delete from cliente WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
const show = async(req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("select * from cliente where id=?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }


};

export const methodos = {
    index,
    store,
    update,
    destroy,
    show
};