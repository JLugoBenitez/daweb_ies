package ies.alcores.daweb.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Asignatura {

    @Id
    private long id;
    private String nombre;
    private int horas;

    @ManyToOne
    @jakarta.persistence.JoinColumn(name = "imparte")
    private Profesor profesor;

}
