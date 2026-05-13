package ies.alcores.daweb.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Data
@Entity
@NoArgsConstructor(force = true)
@AllArgsConstructor
public class Matricula {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "id_mat")
    private long idMat;
    private int curso;
    private double notaMedia;

    @ManyToOne
    @JoinColumn(name = "id_alum")
    private Alumno alumno;

    @ManyToOne
    @JoinColumn(name = "id_asig")
    private Asignatura asignatura;

}
