package com.example.coursereview.course;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import com.example.coursereview.review.Review;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter 
@Setter
public class Course{
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    private String title;

    @OneToMany(mappedBy="course")
    private List<Review> reviews = new ArrayList<>();

    public void addReview(Review review){
        reviews.add(review);
    }
}