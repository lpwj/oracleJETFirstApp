package lpwj.ojet.tutorials.ojet.tutorials.customer;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Customer {
    @Id
    private int id;
    private String firstName;
    private String lastName;

}