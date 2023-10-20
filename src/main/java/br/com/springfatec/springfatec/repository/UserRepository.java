package br.com.springfatec.springfatec.repository;

import br.com.springfatec.springfatec.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
}
