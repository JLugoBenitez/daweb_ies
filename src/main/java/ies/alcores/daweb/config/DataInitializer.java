package ies.alcores.daweb.config;

import ies.alcores.daweb.model.Asignatura;
import ies.alcores.daweb.model.Profesor;
import ies.alcores.daweb.repository.AsignaturaRepository;
import ies.alcores.daweb.repository.ProfesorRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initData(AsignaturaRepository asignaturaRepository, ProfesorRepository profesorRepository) {
        return args -> {
            List<Asignatura> asignaturas = asignaturaRepository.findAll();
            List<Profesor> profesores = profesorRepository.findAll();

            if (profesores.isEmpty()) {
                return;
            }

            for (int i = 0; i < asignaturas.size(); i++) {
                Asignatura a = asignaturas.get(i);
                if (a.getProfesor() == null) {
                    // Assign a professor based on the index (cycling through available professors)
                    Profesor p = profesores.get(i % profesores.size());
                    a.setProfesor(p);
                    asignaturaRepository.save(a);
                    System.out.println("Asignada asignatura '" + a.getNombre() + "' al profesor: " + p.getNombre() + " " + p.getApellidos());
                }
            }
        };
    }
}
