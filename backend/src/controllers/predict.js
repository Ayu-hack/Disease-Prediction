function processData(formData) {
    // Process the form data here
    console.log('Form data received:', {formData});
}
function postHandle(req, res) {
    const formData = req.body;
    res.json({
            message: 'Form submitted successfully!',
            status: 'success',
    });
    processData(formData)

}




function getHandle(req, res) {
    res.send("Chal")

}
export  {postHandle,getHandle}