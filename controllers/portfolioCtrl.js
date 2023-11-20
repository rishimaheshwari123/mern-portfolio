const sendEmailCtrl = async (req, res) => {
    try {
        return res.status(200).send({
            success: true,
            message: "Email send successfully!"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "Send email error",
            error
        })
    }
}
module.exports = { sendEmailCtrl };