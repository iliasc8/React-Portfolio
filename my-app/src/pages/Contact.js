function Contact () {
    return(
        <div class="container">
        <form>
        <div class="form-group mb-3">
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name"></input>
        </div>
        
        <div class="form-group mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email"></input>
        </div>

        <div class="form-group mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Messages</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>


        <input class="btn btn-primary" type="Save" value="Save"></input>
        </form>
    </div>
    )
}

export default Contact;