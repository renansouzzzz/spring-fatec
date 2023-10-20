package br.com.springfatec.springfatec.services;

import br.com.springfatec.springfatec.models.User;
import br.com.springfatec.springfatec.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;
import java.util.UUID;


@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public User create(User user) {

        User userCreate = new User();

        userCreate.setName(user.getName());
        userCreate.setEmail(user.getEmail());
        userCreate.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userCreate.setJobRole(user.getJobRole());

        repository.save(userCreate);

        return userCreate;
    }

    public User update(User user, UUID id) {

        User userUpdate = repository.findById(id).get();

        userUpdate.setName(user.getName());
        userUpdate.setEmail(user.getEmail());
        userUpdate.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userUpdate.setJobRole(user.getJobRole());

        repository.save(userUpdate);

        return userUpdate;
    }

    public List<User> getAll() {
        List<User> userGetAll = repository.findAll();

        return userGetAll;
    }
}
