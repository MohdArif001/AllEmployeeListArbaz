
$(document).ready(function () {
    ShowEmployeeData();
    
    $('#country').change(function () {
        debugger
        var id = $(this).val();
        $('#state').empty();
        $('#state').append('<option>---Select State</option>');
        $.ajax({
            url: '/Home/State?id=' + id,
            success: function (result) {
                debugger
                $.each(result, function (i, data) {
                    $('#state').append('<option value = ' + data.state_Id + '> '+ data.state_Name +' </option>')
                })
            }
        })
    })
    $('#state').change(function () {
        debugger
        var id = $(this).val();
        $('#city').empty();
        $('#city').append('<option>---Select City</option>');
        $.ajax({
            url: '/Home/City?id=' + id,
            success: function (result) {
                debugger
                $.each(result, function (i, data) {
                    $('#city').append('<option value = ' + data.city_Id + '>' + data.city_Name + '</option>')
                })
            }
        })
    })
})


function ShowEmployeeData() {
    debugger
    $.ajax({
        url: '/Home/EmployeeList',
        type: 'Get',
        dataType: 'Json',
        contentType: 'application/json;charset=uft-8;',
        success: function (result, status, xhr) {
            if (result == "Data not fetch") {
                alert('Data is not fetch')
            }
            else {
                var object = '';
                $.each(result, function (index, item) {
                    object += '<tr>';
                  /*  object += '<td>' + item.employee_Id + '</td>';*/
                    object += '<td>' + item.employee_Name + '</td>';
                    object += '<td>' + item.employee_Age + '</td>';
                    /*object += '<td>' + item.employee_Salary + '</td>';*/
                    object += '<td>' + item.employee_Gender + '</td>';
                    object += '<td>' + item.employee_UserName + '</td>';
                    object += '<td>' + item.country_Name + '</td>';
                    object += '<td>' + item.state_Name + '</td>';
                    object += '<td>' + item.city_Name + '</td>';
                    //object += '<td>' + item.employeePassword + '</td>';
                    //object += '<td>' + item.employeeComfirmPassword + '</td>';
                    object += '<td><a href="#" class="btn btn-primary" onclick ="Edit(' + item.employee_Id + ')">Edit</a> ||<a href="#" class="btn btn-danger" onclick="Delete(' + item.employee_Id + ')">Delete<a/>';
                    object += '</tr>';

                });
                $('#TableData').html(object);
            }


        },
        error: function () {
            alert("Dara can't get");
        }
    });
};

$('#btnAddEmployee').click(function () {
    getCountry();
    $('#EmployeePopUp').modal('show');
    $('#Addemp').show();
    $('#btnUpdate').hide();
    $('#empids').hide();
    
    $('#editemp').hide();

})


function AddEmployee(response) {
    debugger
   

    var data = {
        Employee_Name: $('#Name').val(),
        Employee_Age: $('#Age').val(),
        Employee_Salary: $('#Salary').val(),
        Employee_Gender: $('#Gender').val(),
        Employee_UserName: $('#UserName').val(),
        Employee_Password: $('#Password').val(),
        Country: $('#country').val(),
        State: $('#state').val(),
        City: $('#city').val()
    }
    $.ajax({
        url: '/Home/Addemployee',
        type: 'Post',
        data: data,
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        dataType: 'json',
        success: function (response) {
            debugger
            if (response == "Data is Saved") {
                alert('Data Saved')
                ShowEmployeeData();
                clearText();
                $('#EmployeePopUp').modal('hide');
            }
            else {
                alert('Data cannot save')
            }

        },
        error: function () {
            debugger
            alert('Data cannot Save')
        }
    });
}

function CloseModal() {
    $('#EmployeePopUp').modal('hide');
    clearText();
}

function clearText() {
    $('#Name').val('');
    $('#Age').val('');
    $('#Salary').val('');
    $('#GEnder').val('');
    $('#UserName').val('');
    $('#Password').val('');
    $('#ConfirmPassword').val('');
    $('#country').val('');
    $('#state').val('');
    $('#city').val('');


}
// this method for delete data //
function Delete(id) {
    debugger
    if (confirm('Are you sure do want delete this record')) {
        $.ajax({
            url: "/Home/Delete?id=" + id,
            success: function (response) {
                debugger
                if (response == "Data deleted Successfully") {
                    alert('Data Deleted SuccessFully');
                    ShowEmployeeData();
                }
                else {
                    alert('Data can not delete')
                }
               
            },
            error: function () {
                debugger
                alert('Data not delete')
            }

        });

    }
       
}

$('#Name').click(function () {

    // Get the Login Name value and trim it
    var name = $('#yourname').val();
   
    // Check if empty of not
    if (name.length < 1) {
        alert('Text-field is empty.');
        return false;
    }

});

// This is Get country method //
function getCountry(id) {
    debugger
    $.ajax({
        url: '/Home/Country',
        success: function (result) {
            debugger
          
                //This (if) use for show select counry in edit popup //
            if (id == null || id == '') {
                $.each(result, function (i, data) {
                    $('#country').append('<option value=' + data.id + '> ' + data.country_Name + '</option>');
                })
            }
            else {
                $.each(result, function (i, data) {
                    if (id == data.id) {
                        $('#country').append('<option value=' + data.id + ' selected> ' + data.country_Name + '</option>');
                    }
                    else {
                         $('#country').append('<option value=' + data.id + '> ' + data.country_Name + '</option>');
                    }
                   
                })

            }
        }
    });
}

function getState(id) {
    debugger
    $.ajax({
        url: '/Home/State1?id=' + id,
        success: function (result) {
            debugger

            //This (if) use for show select counry in edit popup //
            if (id == null || id == '') {
                $.each(result, function (i, data) {
                    $('#state').append('<option value=' + data.state_Id + '> ' + data.state_Name + '</option>');
                })
            }
            else {
                $.each(result, function (i, data) {
                    if (id == data.state_Id) {
                        $('#state').append('<option value=' + data.state_Id + ' selected> ' + data.state_Name + '</option>');
                    }
                    else {
                        $('#state').append('<option value=' + data.state_Id + '> ' + data.state_Name + '</option>');
                    }

                })

            }
        }
    });
}

function getCity(id) {
    debugger
    $.ajax({

        url: '/Home/City1?id=' + id,
        success: function (result) {
            debugger

            //This (if) use for show select counry in edit popup //
            if (id == null || id == '') {
                $.each(result, function (i, data) {
                    $('#city').append('<option value=' + data.state_Id + '> ' + data.city_Name + '</option>');
                })
            }
            else {
                $.each(result, function (i, data) {
                    if (id == data.city_Id) {
                        $('#city').append('<option value=' + data.city_Id + ' selected> ' + data.city_Name + '</option>');
                    }
                    else {
                        $('#city').append('<option value=' + data.city_Id + '> ' + data.city_Name + '</option>');
                    }

                })

            }
        }
    });
}

function Edit(employeeId) {

    debugger
    $('#Addemp').hide();
    $('#editemp').show();
    $.ajax({
        url: '/Home/Edit?id=' + employeeId,
        type: 'Get',
        contentType: 'application/json;charset=utf-8',
        dataType: 'json',
        success: function (response) {
            debugger
         
            $('#EmployeePopUp').modal('show');
            $('#empid').val(response.employee_Id)
            $('#Name').val(response.employee_Name);
            $('#Age').val(response.employee_Age);
            $('#Salary').val(response.employee_Salary);
            $('#Gender').val(response.employee_Gender);
            $('#UserName').val(response.employee_UserName);
            $('#Password').val(response.employee_Password);  
            getState(response.state);
            getCountry(response.country);
            getCity(response.city);

            
            //$('#SaveData').css('display', 'none');
            //$('#btnUpdate').css('display', 'block');

            $('#SaveData').hide();
            $('#btnUpdate').show();
           

        },
        error: function () {
            debugger
            alert('Data not found');
        }
    });
}

function Update(response) {
    debugger
    var objData = {
        Employee_Id: $('#empid').val(),
        Employee_Name: $('#Name').val(),
        Employee_Age: $('#Age').val(),
        Employee_Salary: $('#Salary').val(),
        Employee_Gender: $('#Gender').val(),
        Employee_City: $('#City').val(),
        Employee_UserName: $('#UserName').val(),
        Employee_Password: $('#Password').val(),
        Employee_Comfirm_Password: $('#ConfirmPassword').val(),
        Country: $('#country').val(),
        State: $('#state').val(),
        City: $('#city').val()
    }
    $.ajax({
        url: '/Home/Update',
        type: 'Post',
        data: objData,
        contentType: 'application/x-www-form-urlencoded;charset=utf-8;',
        dataType: 'json',
        success: function (response) {
            debugger

            if (response == "Data Updated") {
                alert('Data Updated Successfull');
                $('#EmployeePopUp').modal('hide');
                ShowEmployeeData();
                clearText();
            }
            else {
                alert('data  cannot saved');
            }
           

        },
        error: function () {
            debugger
            alert('data cannot saved');
        }

    })

}

