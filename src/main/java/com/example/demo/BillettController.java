package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BillettController {

    @Autowired
    BillettRepository rep;

    @PostMapping("/kunde")
    public void returBillett(Billett innBillett){
        rep.lagreBillett(innBillett);
    }

    @GetMapping("/hentBilletter")
    public List<Billett> hentBillett() {
        return rep.hentAlleBilletter();
    }

    @GetMapping("/slettBilletter")
    public void slettBilletter() {
        rep.slettAlleBilletter();
    }
}
