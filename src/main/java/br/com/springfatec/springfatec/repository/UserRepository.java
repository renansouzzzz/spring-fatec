package br.com.springfatec.springfatec.repository;

import br.com.springfatec.springfatec.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
