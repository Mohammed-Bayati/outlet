const table = () => {
    return (
        <>

            <div className="container shadow-lg p-3 mb-5 bg-white rounded typesH">

                <div class="input-group border border-dark rounded ">
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />

                </div>

                <div className="mt-4 " >
                    <table class="table typesB">
                        <thead class="">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">NAME</th>
                                <th scope="col">ACTION</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>
                                    <button class="btn btn-dark btn-sm" id="btnTB" type="submit">Edit </button>

                                    <button class="btn btn-dark btn-sm" id="btnTB" type="submit">Delete</button>
                                </td>



                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>
                                    <button class="btn btn-dark btn-sm" id="btnTB" type="submit">Edit </button>

                                    <button class="btn btn-dark btn-sm" id="btnTB" type="submit">Delete</button>
                                </td>



                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>
                                    <button class="btn btn-dark btn-sm " id="btnTB" type="submit">Edit</button>

                                    <button class="btn btn-dark btn-sm " id="btnTB" type="submit">Delete</button>
                                </td>

                            </tr>
                        </tbody>
                    </table>



                </div>

            </div>
        </>

    )

}


export default table;